import MovieName from "./MovieName"

export default function MoviesList(props) {
    return (<div>
        {
            props.names.map(name =>{
                return <MovieName name ={name}/>
            })
        }
    </div>)
}