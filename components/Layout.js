import Link from 'next/link';
import Head from 'next/head';

class Layout extends React.Component{
    render(){
        const navTitle = this.props.nav.title ;
        const navHref = this.props.nav.href ;
        const style = {}
        if(this.props.podcast){
            style['display'] = 'flex';
            style['flexDirection'] = 'column';
            style['height'] = '100vh';
            style['justifyContent'] = 'space-between';
        }
       return(
           <div style={style}>
               <Head>
                   <title>Podcast | {this.props.title}</title>
                   <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
               </Head>
               <header>
                   {
                       navTitle &&
                        <Link href={navHref} prefetch>
                            <a className='navigation'>&lt; {navTitle}</a>
                        </Link>
                   }
                   <Link href="/">
                        <a className="title">Podcast</a>  
                   </Link>
                   
                </header>

                { this.props.children }

                <style jsx>{`
                    header{
                        color: #fff;
                        background: #8756ca;
                        padding: 15px;
                        text-align: center;
                        position: relative;
                   }
                   .navigation{
                        color: #FFF;
                        text-decoration: none;
                        position: absolute;
                        left: 15px; 
                        top: 50%;
                        transform: translateY(-50%);
                   }
                   .title{
                       color: #FFF;
                       text-decoration: none;
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

export default Layout;