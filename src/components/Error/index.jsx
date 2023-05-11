import React from 'react'
import {Link} from "react-router-dom";
import './error.css'



export default function Error() {
    return (
    <div className="error-page-wrap">
            
		<article className="error-page gradient">
			<hgroup>
				<h1>404</h1>
				<h2>oops! page non trouvée</h2>
			</hgroup>
			<Link className="error-back" to="/">back</Link>
		</article>

        </div>
    )
}
  