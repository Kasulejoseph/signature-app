import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import SignatureView from 'react-native-signature-canvas'


export default function DigitalSignature({onSignatureCaptured}) {
    const signatureRef = useRef<SignatureCapture>(null);

  const handleCapture = (signature) => {
    if (signatureRef.current) {
        console.log("+++*((())))))", signatureRef.current);
        
    //   signatureRef.current.saveImage();
    onSignatureCaptured(signature)
    }
  };

  const handleSignature = signature => {
    console.log(signature);
  };


  const handleSave = (data: string) => {
    onSignatureCaptured(data);
  };

  return (
    <View style={{ height: 200, width: '100%', marginTop: 100, backgroundColor: '#fff' }}>
      <SignatureView
        ref={signatureRef}
        style={{ flex: 1, borderBottomWidth:2, marginBottom: 10 }}
        onOK={handleSignature}
        descriptionText="Sign"
      />
      <Button color={'#3762FB'} title="Done" onPress={handleCapture} />
    </View>
  );
}
