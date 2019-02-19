import Link from 'next/link';


class ChannelGrid extends React.Component{
    render(){
        const { channels  } = this.props;
        return(
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

                <style jsx>{`
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

            </div>
        )
    }
}

export default ChannelGrid;