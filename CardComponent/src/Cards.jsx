import "./Cards.css"

const userData =[
    {
        name: "Jone",
        city: "London",
        designation: "Front-end developer",
        skills: ["UI / UX", "Front End Development", "HTML",
        "CSS", "JavaScript", "React", "Node"],
        status: true,
        profile: "img1.jpg"
    },
    {
        name: "Robert",
        city: "California",
        designation: "Full Stack web developer",
        skills: ["Vlogging", "Web Development", "HTML",
        "CSS", "JavaScript", "React", "Angular"],
        status: false,
        profile: "img2.jpg",
        },
        {
        name: "Nancy",
        city: "San Francisco",
        designation: "Senior Software Developer",
        skills: ["C", "C++", "Java Programming", "Python",
        "C#.Net", "MySQL", "MongoDB"],
        status: true,
        profile: "img3.jpg"
    }
]
function User(props){
    return(
        <div className="user">
            <span className={props.status?"status online" : "status offline"}>{props.status?"online" : "offline"}</span>
            <img src={props.profile} alt="Profile" />
            <h3>{props.name}</h3>
            <h4>{props.city}</h4>
            <p>{props.designation}</p>
            <div className="btns">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill, index) =>(
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export const Cards =() =>{
    return(
        <>
          {/* <User name="Jone" city="London" designation="Front-End Developer" skills={ ["UI/UX",
            "Front End Development", "HTML", "CSS", "JavaScript",
            "React", "Node"]} profile="img1.jpg" status={false}/> */}

            {userData.map((user, index) => (
                <User key={index} 
                name={user.name}
                city={user.city} 
                designation={user.designation} 
                skills={user.skills} 
                profile={user.profile} 
                status={user.status}
                />
            ))}
        </>
    )
}
