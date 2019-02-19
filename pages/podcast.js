import React from 'react';
import Link from 'next/link';
import 'isomorphic-fetch';

class Podcast extends React.Component{
    
    static async getInitialProps({query}){
        const podcastId = query.id;
        const dataPodcast = await (await fetch(`https://api.audioboom.com/audio_clips/${ podcastId }.mp3`)).json();
        const podcast = dataPodcast.body.audio_clip;
        return{ podcast }
    }
    
    render(){
        const { podcast } = this.props;
        console.log(podcast);
        return(
            <div>
                <div className="wrapper">
                    <header>
                        <Link href={`/channel?id=${podcast.channel.id}`}>
                            <a className='close'>&lt; Volver</a>
                        </Link>
                        Podcasts
                    </header>

                    <figure>
                        <img src={podcast.urls.image || podcast.channel.urls.logo_image.original} alt=""/>
                    </figure>
                    
                    <div className="player">
                        <h3>{ podcast.title }</h3>
                        <h6>{ podcast.channel.title }</h6>
                        <audio controls autoPlay={true}>
                            <source src={ podcast.urls.high_mp3 } type='audio/mpeg' />
                        </audio>
                    </div>

                </div>

                <style jsx>{`
                    header {
                        color: #fff;
                        background: #8756ca;
                        padding: 15px;
                        text-align: center;
                        position: relative;
                    }
                    figure{
                        width: 80%;
                        max-width: 500px;
                        max-height: 400px
                        margin: 0 auto;
                        padding: 0;
                    }
                    img{
                        width: 100%;
                        box-shadow: 0px 3px 6px rgba(0,0,0,.3);
                    }
                    audio{
                        width: 80%;
                    }
                    header a{
                        color: #FFF;
                        text-decoration: none;
                        position: absolute;
                        left: 15px; 
                        top: 50%;
                        transform: translateY(-50%);
                    }
                    .wrapper{
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        background: #8756ca;
                    }
                    .player{
                        padding 40px 0;
                        background: rgba(0,0,0,.5);
                        color: #FFF;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-around;
                        text-align: center;
                    }
                    .player h3{
                        text-align: center;
                        padding: 0;
                        margin: 0;
                        margin-bottom: 10px;
                    }
                    .player h6{
                        text-align: center;
                        padding: 0;
                        margin: 0;
                        margin-bottom: 15px;
                    }
                `}
                </style>
                <style jsx global>{`
                    body {
                    margin: 0;
                    font-family: system-ui;
                    background: white;
                    }
                `}</style>
            </div>
        )
    }
}

export default Podcast;