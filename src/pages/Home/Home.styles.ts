const styles = {
    container: {
        display: 'flex',
        height: '95vh',
        justifyContent: 'center',
    },
    mainView1: {
        display: 'flex',
        width: '95%',
        height: '360px',
        // backgroundColor: 'red',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    view1: {
        display: 'flex',
        width: '47%',
        height: '100%',
        alignItems: 'flex-start',
        // backgroundColor: 'green',
        flexDirection: "column" as const,
        paddingLeft: 10,
        paddingTop: 10,
    },
    view2: {
        display: 'flex',
        width: '40%',
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 0.9,
        alignSelf: 'flex-start',
        fontFamily: 'sans-serif'
    },
    largeText: {
        color: '#ffffff',
        fontWeight: 'bold' as const,
        fontSize: 60,
        lineHeight: 0.9,
        alignSelf: 'flex-start',
    },
    smallText: {
        color: '#ffffff',
        fontWeight: 'bold' as const,
        lineHeight: 0.9,
        alignSelf: 'flex-start',
        marginTop: '10px'
    }
}

export default styles