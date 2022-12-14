import wifiimage from './assets/wifi.png';
import request from './assets/request.png';
import { FaWifi, FaSpotify } from 'react-icons/fa';
import { SECRETS } from './assets/secrets';

export default function Wifi() {
    return(
        <div>
            <div className="wifi">
                <div className="center">
                    <h2 className="wifi-title">Wi-Fi</h2>
                    <FaWifi/>
                </div>
                <p>SSID: {SECRETS.ssid}</p>
                <p>Password: {SECRETS.password}</p>
                <img src={wifiimage} alt="wifi" id="wifi-image"/>
            </div>
            <div className="wifi move">
                <div className="center">
                    <h2 className="wifi-title">Song Requests</h2>
                    <FaSpotify/>
                </div>
                <p>Scan Below!</p>
                <p>You must be connected</p>
                <p>to the Wi-Fi!</p>
                <img src={request} alt="request" id="wifi-image"/>
            </div>
        </div>
    )
}