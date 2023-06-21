import React from "react";
import { Typography, Grid, Stack, Paper} from "@mui/material";
interface IProps {
    issueTitle: string
}

interface IProps2 {
    message?: string
}

const ProjectCard  = ({ issueTitle, message } : IProps & IProps2) => {

    let c : undefined | null | number;

    const add =({a,b}: {a: number, b: number}) => {
        return a + b;
    }

    return(
        <div className="project_card">
            <Paper elevation={1} sx={{p: '10px', m:'1rem'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={2}>
                            <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                                Issue Title: {issueTitle} : {message&& (
                                    <div>ddd</div>
                                    )}
                            </Typography>
                            <Stack direction='row' spacing={2}>
                                <Typography variant="body1">
                                    Opened: yesterday
                                </Typography>
                                <Typography variant="body1">
                                    Priority: medium
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default ProjectCard;
