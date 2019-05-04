import requests
import json

subscription_key = 'fabb4183fc89457f8e0a19eda2d04347'
assert subscription_key

face_api_url = 'https://australiaeast.api.cognitive.microsoft.com/face/v1.0/detect'

image_url = 'https://i.kinja-img.com/gawker-media/image/upload/s--rKYOx8vT--/c_scale,f_auto,fl_progressive,q_80,w_800/19cmhfu7ebpy7jpg.jpg'

headers = { 'Ocp-Apim-Subscription-Key': subscription_key }

params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise',
}

response = requests.post(face_api_url, params=params, headers=headers, json={"url": image_url})
print(json.dumps(response.json()))