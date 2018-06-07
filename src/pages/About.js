import React from 'react';
import qs from 'query-string';

const About = ({location, match}) => {
    const query = qs.parse(location.search);
    
    const detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blablah'}
        </div>
    );
};

export default About;