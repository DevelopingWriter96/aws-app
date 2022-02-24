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

    const { setList } = props

    console.log(setList.sets[0])

    const handleSaveSet = async () => {
        const newSetToSave = {
            Number: set.sets[0].number,
            Theme: set.sets[0].theme,
            Name: set.sets[0].name,
            Pieces: set.sets[0].pieces
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
                {setList.map((set) =>{(
                <Card key={set.id} sx={{ maxWidth: 400}}>
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