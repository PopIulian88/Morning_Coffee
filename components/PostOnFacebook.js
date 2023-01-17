import {Linking} from "react-native";

export const postOnFacebook = ({myImage, myInspiration}) => { //Help me to share an image to facebook
    let facebookParameters = [];
    if (myImage)
        facebookParameters.push('u=' + encodeURI(myImage));
    if (myInspiration)
        facebookParameters.push('quote=' + encodeURI(myInspiration));
    const url =
        'https://www.facebook.com/sharer/sharer.php?'
        + facebookParameters.join('&');

    Linking.openURL(url)
        .then((data) => {
            alert('Facebook Opened');
        })
        .catch(() => {
            alert('Something went wrong');
        });
};