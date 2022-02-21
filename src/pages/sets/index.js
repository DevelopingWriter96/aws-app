import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import { Box, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { getSetData } from "../utils/api-util";

const SetsList = (props) => {

    const { set } = props

    console.log(set.sets[0])

    const handleSaveSet = () => {
        console.log("Save this set")
    }

    const handleDeleteSet = () => {
        console.log("Delete this set")
    }

    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 400}}>
                <CardMedia component='img' image={set.sets[0].image.imageURL} title = {set.sets[0].name} />
                <CardContent>
                    <Box>
                        <Typography variant="subtitle1">{set.sets[0].year}</Typography>
                        <Typography variant="subtitle1">{set.sets[0].theme}</Typography>
                        <Typography variant="subtitle1">{set.sets[0].name}</Typography>
                        <Typography variant="subtitle2">{set.sets[0].extendedData.description}</Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="save" onClick={handleSaveSet}>
                        <SaveIcon/>
                    </IconButton>
                    <IconButton aria-label="delete" onClick={handleDeleteSet}>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>
                </Card>
            </Box>       
        </>
    )
}

export async function getStaticProps() {
    const fetchedSet = await getSetData('75218')

    return {
        props: {
            set: fetchedSet
        }
    }
}

export default SetsList