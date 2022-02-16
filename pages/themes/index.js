import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Box } from '@mui/material';
import { getThemeData } from "../utils/api-util";

const ThemesList = (props) => {
    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{display: 'flex', justifyContent: 'center' }}>
                <p>Theme data goes here.</p>
            </Box>       
        </>
    )
}

export async function getStaticProps() {
    const fetchedThemeSets = await getThemeData('Star Wars')
}

export default ThemesList