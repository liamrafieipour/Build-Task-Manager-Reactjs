import { useState, useEffect } from "react";
import Tasks from './Tasks';



const Home = () => {
    const [tasks, setTasks] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/tasks')
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data');

                }
                return res.json();
            })
            .then(data => {
                setTasks(data);
                setIsPending(false);
                setError(null);

            }).catch(err => {
                setError(err.message);
                setIsPending(false);

            });
    }, [])
    return (

        <div className="content">

            <h2>My Tasks</h2>

            {error && <div> could not connect to the Server</div>}
            {isPending && <div>Loading</div>}
            {tasks && <Tasks tasks={tasks} />}
        </div>


    );
}

export default Home;