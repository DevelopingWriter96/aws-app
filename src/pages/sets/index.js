import Amplify, { API } from "aws-amplify";
import config from "../../aws-exports"
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import { Box, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { getSetData } from "../../utils/api-util";
import { createSetData } from "../../graphql/mutations"

Amplify.configure(config)

const SetsList = (props) => {

    const { set } = props

    console.log(set.sets[0])

    const handleSaveSet = async () => {
        const newSetToSave = {
            image: set.sets[0].image.imageURL,
            number: set.sets[0].number,
            theme: set.sets[0].theme,
            name: set.sets[0].name,
            retailPrice: set.sets[0].LEGOCom.US.retailPrice,
            pieces: set.sets[0].pieces, 
            description: set.sets[0].extendedData.description
        }

        try {
            const response = await API.graphql({
                query: createSetData,
                variables: { input: newSetToSave },
                autMode: 'API_KEY'
            })
            console.log('Created a new set')
            console.log(response)
        } catch (err) {
            console.log("Save set error", err)
        }
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
                        <Typography variant="subtitle1">{set.sets[0].number}</Typography>
                        <Typography variant="subtitle1">Lego {set.sets[0].theme}</Typography>
                        <Typography variant="subtitle1">{set.sets[0].name}</Typography>
                        <Typography variant="subtitle1">${set.sets[0].LEGOCom.US.retailPrice} retail</Typography>
                        <Typography variant="subtitle1">{set.sets[0].pieces} pieces</Typography>
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