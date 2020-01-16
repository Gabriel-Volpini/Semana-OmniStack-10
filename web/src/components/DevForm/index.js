import React, {useState, useEffect} from "react";

export default function DevForm({onSubmit}){


    const [latitude, setLatitude] = useState(``);
    const [longitude, setLongitude] = useState(``);

    const [github_username, setGithub_username] = useState(``);
    const [techs, setTechs] = useState(``);

    useEffect(()=>{navigator.geolocation.getCurrentPosition(
        (position) => {
          const {latitude, longitude} = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (err) => {console.log(err)},
        {
          timeout:30000
        }
      )}, []);

    async function handleSubmit(e){
        e.preventDefault();
        
        await onSubmit({
            github_userName:github_username,
            techs,
            latitude,
            longitude
          })

        setGithub_username(``);
        setTechs(``);
    }


    return(
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor='username_github'>Usuario do Github</label>
            <input 
              name="username_github" 
              id='username_github' 
              required
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor='techs'>Tecnologias</label>
            <input 
              name="techs" 
              id='techs' 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}  
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor='latitude'>Latitude</label>
              <input 
                type='number' 
                name="latitude" 
                id='latitude' 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor='longitude'>Longitude</label>
              <input 
                type='number' 
                name="longitude" 
                id='longitude' 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button className="submitButton">Salvar</button>
        </form>
    )
}