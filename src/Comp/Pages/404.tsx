import React from 'react'
import Error from '../pic/error/Error_404_Flag.gif'
const NotFound = () => {

return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 center-xs">
                   <div>
                   <img className="error-image" src={Error} alt=''/>
                   </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default NotFound