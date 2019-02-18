import React from 'react';
import 'isomorphic-fetch';

class Channel extends React.Component{
    
    static async getInitialProps({ query }){
        const idChannel = query.id
        const res = await fetch(`https://api.audioboom.com/channels/${ idChannel }`);
        const { body: {audio_clips} } = await (await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)).json();
        const { body: {audio_clips} } = await (await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)).json();
        const {body: {channel}} = await res.json();
        return {channel, audio_clips};
    }
    
    render(){
        const { channel, audio_clips: audioClips } = this.props;
        console.log(channel, audioClips);
        return(
            <div>
                <header>Podcast</header>
                <img src={channel.urls.banner_image.original} alt={channel.title}/>
                <h1>{ channel.title }</h1>
                {
                    audioClips.map((clip, index)=>{
                        return(
                            <div>{ clip.title }</div>
                        )
                    })
                }
                
                
                <style jsx>{`
                    img{
                        width: 100%
                    }
                    header{
                        color: #fff;
                        background: #8756ca;
                        padding: 15px;
                        text-align: center;
                   }
                `}</style>
                <style jsx global>{`
                    body{
                        margin: 0;
                        font-family: system-ui
                    }
                `}</style>
            </div>
        )
    }
}

export default Channel;