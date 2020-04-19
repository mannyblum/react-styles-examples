import React from 'react';
import {
    Typography,
    Button
} from '@material-ui/core';

import HookButton from './HookButton';
import HOCButton from './HOCButton';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h5" gutterBottom>
                    Todd's PlayGround
                </Typography>
                <Button variant="contained" color="primary">
                Hello!
                </Button>
                <br /><br />
                <HookButton />
                <br /><br />
                <HOCButton />
            </div>
        )
    }
}

export default Home;