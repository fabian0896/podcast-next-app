import React, { Fragment} from 'react';
import 'isomorphic-fetch';
import Error from './_error';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import PodcastList from '../components/PodcastList';
import PodcastListWithClick from '../components/PodcastListWithClick';

class Channel extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { openPodcast: null }
    }

    openPodcast = (event, podcast)=>{
        event.preventDefault();
        this.setState({
            openPodcast: podcast
        })
    }

    static async getInitialProps({ query, res }){
        const idChannel = query.id

        try{
            let [reqChannel, reqSeries, reqAudios] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${ idChannel }`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
            ])

            if(reqChannel.status >= 404){
                res.statusCode = reqChannel.status;
                return { 
                    channel: null, 
                    audioClips: null, 
                    series: null,
                    statusCode: reqChannel.status
                }
            }
            
            const dataChannel = await reqChannel.json();
            const channel = dataChannel.body.channel;
    
            const dataSeries = await reqSeries.json();
            const series = dataSeries.body.channels
            
    
            const dataAudios =  await reqAudios.json();
            const audioClips = dataAudios.body.audio_clips;
            
            return {channel, audioClips, series, statusCode: 200 };
        } catch(e){
            return { 
                channel: null, 
                audioClips: null, 
                series: null,
                statusCode: 503
            }
        }
    }
    
    render(){
        const { 
            channel, 
            audioClips,
            series,
            statusCode
        } = this.props;
        //console.log(channel, audioClips);

        const { openPodcast } = this.state;

        if(statusCode !== 200){
            return(
                <Error statusCode={statusCode} />
            )
        }

        return(
            <Layout nav={{title:'home', href:"/"}} title={ channel.title }>
                
                <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />
                
                {
                    openPodcast && <h1>Hay un podcast abierto</h1>
                }
                
                
                <h1>{ channel.title }</h1>
                {
                    series.length > 0 &&
                    <Fragment>
                        <h2>Series</h2>
                        <ChannelGrid  channels={ series } />
                    </Fragment>
                }
                <PodcastList  onClickPodcast={this.openPodcast} podcasts={ audioClips } />


                <style jsx>{`
                .banner {
                width: 100%;
                padding-bottom: 25%;
                background-position: 50% 50%;
                background-size: cover;
                background-color: #aaa;
                }
                h1 {
                font-weight: 600;
                padding: 15px;
                }
            `}</style>
            </Layout>
        )
    }
}

export default Channel;