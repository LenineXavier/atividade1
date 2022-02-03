export function IdCard (props) {
    return(

           
        <div className="IdCard">
           
                        
               <img src={props.image} alt={props.alt}/>
         
            <p>
                <b>Last Name:</b>{props.lastName}
            </p>
            <p>
                <b>First Name:</b>{props.firstName}
            </p>
            <p>
                <b>Gender:</b>{props.gender}
            </p>
            <p>
                <b>Height:</b>{props.height}
            </p>

            <p>
             <b>Birth:</b>{props.birth.toLocaleString()} 
            </p>
            
            
        </div>
    )

}
