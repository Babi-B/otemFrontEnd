const styles = {
    container: {
        display: 'flex',
        //height: '95vh',
        justifyContent: 'center',
        flexDirection: 'column' as const,
    },
    mainView1: {
        display: 'flex',
        width: '100%',
        height: '400px',
        // backgroundColor: 'red',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#6D214F',
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
    },
    mainView2: {
        display: 'flex',
        flexDirection: 'row' as const,
        flexWrap: 'wrap' as const,
        width: '100%',
        marginTop: 50,
        marginBottom: 20,
        paddingBottom: 20,
        backgroundColor: 'rgba(245, 246, 250,1.0)',
        borderWidth: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
}

export default styles