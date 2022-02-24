import Amplify, { API } from "aws-amplify";
import config from "../../aws-exports"
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import { Box, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { getSetData } from "../../utils/api-util";
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
            <Box sx={{display: 'flex', justifyContent: 'center' }
            }>
                {setsList.map((set) =>{(
                <Card key={set.id} sx={{ maxWidth: 400}}>
                <CardMedia component='img' image={set.image.imageURL} title = {set.name} />
                <CardContent>
                    <Box>
                        <Typography variant="subtitle1">{set.number}</Typography>
                        <Typography variant="subtitle1">Lego {set.theme}</Typography>
                        <Typography variant="subtitle1">{set.name}</Typography>
                        <Typography variant="subtitle1">${set.LEGOCom.US.retailPrice} retail</Typography>
                        <Typography variant="subtitle1">{set.pieces} pieces</Typography>
                        <Typography variant="subtitle2">{set.extendedData.description}</Typography>
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
            )})}
            </Box>       
        </>
    )
}

export async function getStaticProps() {
    try {
        const response = await API.graphql({
            query: listSetData,
            autMode: 'API_KEY'
        })
        console.log('Retrieved a list of sets from AWS')
        console.log(response)
        return {
            props: {
                setList: response.data.listSetData.items
            }
        }
    } catch (err) {
        console.log("Retrieve set list error", err)
    }

    /* const fetchedSet = await getSetData('75218')

    return {
        props: {
            set: fetchedSet
        }
    } */
}

export default SetsList