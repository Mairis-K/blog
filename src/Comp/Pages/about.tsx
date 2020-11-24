import React from 'react'
import '../Pages/about.css';
import 'flexboxgrid'

import Photo from '../pic/aboutPortrait.jpg'

const About = () => {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="photo-img__wrapper">
                            <img className="photo-img" src={Photo} alt='' width="618" height="618" />
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="content__wrapper">
                            <h1 className="heading">
                                About
                             </h1>
                            <p className="parag">
                                AC/DC (stylised as ACϟDC) are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young.[1] Although their music has been variously described as hard rock, blues rock, and heavy metal,[2] the band themselves call it simply "rock and roll".[3]

                                AC/DC underwent several line-up changes before releasing their first album, 1975's High Voltage. Membership subsequently stabilised around the Young brothers, singer Bon Scott, drummer Phil Rudd, and bassist Mark Evans. Evans was fired from the band in 1977 and replaced by Cliff Williams, who has appeared on every AC/DC album since 1978's Powerage. In February 1980, Scott died of acute alcohol poisoning after a night of heavy drinking.[4] The group considered disbanding but elected to stay together, bringing in longtime Geordie vocalist Brian Johnson as Scott's replacement.[5] Later that year, the band released their first album with Johnson, Back in Black, which was dedicated to Scott's memory. The album launched AC/DC to new heights of success and became one of the best selling albums of all time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About