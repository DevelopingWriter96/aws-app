import {Box, Card, CardContent, CardMedia, Dialog, Typography, CardActions, IconButton} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';

const SetFoundDialog = (props) => {
    const { open, set, onSaveSet, onClose } = props

    return (
        <Dialog maxWidth="sm" open={open} onClose={onClose}>
            <Card key={set.id} sx={{ maxWidth: 400, m:1 }}>
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
                    <IconButton aria-label="save set" onClick={onSaveSet}>
                        <SaveIcon/>
                    </IconButton>
                </CardActions>
                </Card>
        </Dialog>
    )
}

export default SetFoundDialog