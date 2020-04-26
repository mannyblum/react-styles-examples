import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography, Container, Grid, Card, CardContent } from '@material-ui/core';

const StylesExample = () => {
    return (
        <React.Fragment>
            <Container maxWidth="sm" component="main">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Styles
                </Typography>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" align="center" gutterBottom>
                                    No Color
                                </Typography>
                                <Button fullWidth variant="contained">Button</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" align="center" color="primary" gutterBottom>
                                    New Primary Color
                                </Typography>
                                <Button fullWidth variant="contained" color="primary">Button</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" align="center" color="secondary" gutterBottom>
                                    New Secondary Color
                                </Typography>
                                <Button fullWidth variant="contained" color="secondary">Button</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default StylesExample;