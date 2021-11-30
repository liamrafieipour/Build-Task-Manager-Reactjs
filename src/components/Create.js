import { useState } from "react";
import { useHistory } from "react-router";
const Create = () => {
    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState();
    const history = useHistory();

    const handelSubmit = (e) => {
        e.preventDefault();
        const tasks = { title, subtitle };
        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(tasks)
        }).then(() => {
            history.push("/success");
        })


    }
    return (
        <div className="create">
            <h2>Create new Task</h2>
            <form onSubmit={handelSubmit}>
                <label >Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
                <label >Subtitle</label>
                <textarea
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    required />

                <button>Create Task</button>

            </form>
        </div>
    );
}

export default Create;