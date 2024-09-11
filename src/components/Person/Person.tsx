import "./Person.css"


interface PersonProps{
    name: string,
    age: number
}

const Person: React.FC<PersonProps> = ({name, age}) => {
    return (
        <div className='Person'>
            <h1>{name}</h1>
            <p> Age: {age}</p>
        </div>
    );
};

export default Person