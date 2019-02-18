import 'isomorphic-fetch';
import Link from 'next/link';

class Home extends React.Component{
    
    static async getInitialProps(){
        let req = await fetch('https://api.audioboom.com/channels/recommended');
        let {body: channels} = await req.json();
        return { channels }
    }
    
    render(){
        const { channels } = this.props;
        return(
            <div>
                <header>Podcast</header>
                <div className="channels">
                    {
                    channels.map((chanel, index)=>{
                        return(
                            <Link key={index} href={`/channel?id=${chanel.id}`} prefetch>
                                <a className="channel">
                                    <img src={chanel.urls.logo_image.original} alt={chanel.title}/>    
                                    <h2>{chanel.title}</h2>
                                </a>
                            </Link>
                        )
                    })
                    }
                </div>


                <style jsx>{`
                   header{
                        color: #fff;
                        background: #8756ca;
                        padding: 15px;
                        text-align: center;
                   }
                   .channels{
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                   }
                   .channel{
                        display: block;
                        margin-bottom: 0.5em;
                        color: #333;
                        text-decoration: none;
                        transition: .2s;
                   }
                   .channel img{
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        width: 100%;
                   }
                   .channel:hover{
                        transform: scale(1.05); 
                    }
                   .channel:hover img{
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.5); 
                   }
                   h2{
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
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

export default Home;