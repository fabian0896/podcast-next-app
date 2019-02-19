import React, { Fragment} from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import PodcastList from '../components/PodcastList';

class Channel extends React.Component{
    
    static async getInitialProps({ query }){
        const idChannel = query.id

        let [reqChannel, reqSeries, reqAudios] = await Promise.all([
            fetch(`https://api.audioboom.com/channels/${ idChannel }`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
        ])

        const dataChannel = await reqChannel.json();
        const channel = dataChannel.body.channel;

        const dataSeries = await reqSeries.json();
        const series = dataSeries.body.channels
        

        const dataAudios =  await reqAudios.json();
        const audioClips = dataAudios.body.audio_clips;
        
        return {channel, audioClips, series };
    }
    
    render(){
        const { 
            channel, 
            audioClips,
            series
        } = this.props;
        //console.log(channel, audioClips);
        return(
            <Layout nav={{title:'home', href:"/"}} title={ channel.title }>
                
                <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />
                <h1>{ channel.title }</h1>
                {
                    series.length > 0 &&
                    <Fragment>
                        <h2>Series</h2>
                        <ChannelGrid  channels={ series } />
                    </Fragment>
                }
                <PodcastList  audioClips={ audioClips } />


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