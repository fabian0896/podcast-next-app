
class About extends React.Component{
    render(){
        return(
            <div>
                <img src="../static/platzi-logo.png" alt="Platzi"/>
                <h1>Acerca de este curso</h1>
                <p>Este curso fue esta creado para aprender a usar el framework de next.js</p>
                <style jsx>{`
                    div{
                        font-family: 'Arial';
                        height: 100vh;
                        width: 100%;
                        background: #273b47;
                        color: #FFF;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }
                    img{
                        width: 200px;
                    }
                    h1{
                        font-size: 50px;
                        text-align: center;
                        margin: 0;
                        padding: 0 10px;
                        margin-bottom: 15px;
                    }
                    p{
                        font-size: 20px;
                        font-weight: 100;
                        text-align: center;
                        margin: 0;
                        padding: 0 10px;
                    }
                    :global(body){
                        margin: 0;
                        padding: 0;
                    }
                `}</style>
            </div>
        )
    }
}

export default About;