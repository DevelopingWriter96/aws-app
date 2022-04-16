import Amplify, { API } from "aws-amplify";
import config from "../../aws-exports"
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import { Box, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
//import { getSetData } from "../../utils/api-util";
import { createSetData } from "../../graphql/mutations"
import { listSetData } from "../../graphql/queries"


Amplify.configure(config)

const SetsList = (props) => {

    const { setsList } = props

    console.log(setsList)

    const handleSaveSet = async () => {
        const newSetToSave = {
            Number: setsList.number,
            Theme: setsList.theme,
            Name: setsList.name,
            Pieces: setsList.pieces
            //Image: setsList.Image.ImageURL
            //Description: setsList.ExtendedData.Description
            //RetailPrice: setsList.LEGOCom.US.RetailPrice
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
            <Box sx={{display: 'flex', flexWrap: 'wrap' }}>
                {setsList.map((set) => (
                <Card key={set.id} sx={{ maxWidth: 400}}>
                <CardMedia component='img' image={set.Image?.ImageURL} title = {set.Name} />
                <CardContent>
                    <Box>
                        <Typography variant="subtitle1">{set.Number}</Typography>
                        <Typography variant="subtitle1">Lego {set.Theme}</Typography>
                        <Typography variant="subtitle1">{set.Name}</Typography>
                        <Typography variant="subtitle1"> $ {set.LEGOCom?.US?.RetailPrice} US Retail</Typography>
                        <Typography variant="subtitle1">{set.Pieces}</Typography>
                        <Typography variant="subtitle2">{set.ExtendedData?.Description}</Typography>
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
            ))}
            </Box>       
        </>
    )
}

export async function getStaticProps() {
    let setsList = []
    try {
        const response = await API.graphql({
            query: listSetData,
            autMode: 'API_KEY'
        })
        setsList = response.data.listSetData.items
    
    } catch (err) {
        console.log("Retrieve set list error", err)
    }
    return {
        props: {
            setsList: setsList
        }
    }

    /* const fetchedSet = await getSetData('75218')

    return {
        props: {
            set: fetchedSet
        }
    } */
}

export default SetsList