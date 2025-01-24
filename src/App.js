import logo from './logo.svg';
import './App.css';
import {models} from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <PowerBIEmbed
         embedConfig = {{
           type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
           id: '0a822456-7636-4715-81d6-be8c0210fa9e',
           embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=0a822456-7636-4715-81d6-be8c0210fa9e&groupId=3d8f7884-bddb-4b88-8762-b8680352fe37&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtSC1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
           accessToken: 'H4sIAAAAAAAEAB2Ux66rWgJE_-VMaQkw0S3dAdHksMnMwGRM2Jj89P69z-15SVVaqqp_fpzs-kxZ8fPfHxLRL4Hc0x3m4LViesyWDBhLgfKqB8ZoclwAfQ-euMgStAJbVaRbZoSyRH4mWfE2XyhV2-lhytVx-d65rjEEKp_DYxjuyjkxZdWvmuJEjuYN9wgqZ8rh0HjVl7aYyOysd-_ycL1iPnjofMeUvUWt7XWzbQglEbw0jEjN07EftjE1F8-rw9EFZV4f2LC2bfXZC4eQKCXft9C5KsRRvSPyR0qLqjP5ZnGjnmod05JCYKFJ9OQxbZoURBrBQMetiSvFyWM8aNp1mmFlxMqoE8rZgSwduD4U7OwCdIDdVEk9w93pxJ4HQo7kckIXkfW8oJcVOaZBQKcmoF_bCRZMbNnEM5vGPdbuZgHfhWzS808CJaxR7nEcoDzLU9-kQ60xLLqs6vETBT2HNpp9BuRSPo8Ijs93TgBwx7RoR-fDCkyY3mA3PuG-vmAblTM3AqzVMSQ7qbYI_eX2kFAU24FaoDWNpNCKHO8gYI1WXKc17x5HLVQD7sAT8YOsmYaPnykgO0YPRcPOXAdMttNaqLLrX4aMXqUAk2GVPK1KegiCzYJVyDzXsUmO7TPc3T3k9qtXWR3RUY5Mt99EutZ_3XnAFIjCOFr6O-WeVNuu0cbqa8aD0iUxU72Yk8oZtJyXaEOnMmaPdF98k17HT8P5-PDq9WLG_Eb1jwB7W_fDAV6QiL2fGwbzHUlbvlesN4OV3a8aF7XPgWC8yRBzUsNxPw59kLWbLoo1us0FPRqe8xh-MAXUp2bzzG9f3twUb88s3N0C9W2h-PnPj7Bc8zrp5fU7h_jX7Mlu79ebiTFh9WJrsPtHm2yz3fS28UZP-YV7bXR99oRd4XMimhHHd-p7Nso3sxvqdKS9dG47kYhLUdNuP21S_WIlkfB6UZcl8_gmrimSQhQHLDyhqtE6EMmeiVnw2weVkUfmmmYYNFh_HVZ0UoaTd-2sH3I0oytJ2O6d4LFvaUNUMVvf4UvsMM2TtDIXCnNkT1Jj57YSGkCrzfuugLG16aJhmNy_jNnJzUPt1nrVJA3N3Rd4vwYaUqT1UTK-MHn3BdF9VJkyY7tgVNH9-1Iui2OIl5K8yS1Tvib6-NhhG5nAGk0LZXdLNRTJrGk9lNl6xdAAk3mqDQ46YIFb8cv7e_z58xfzNTflooa_lFOIQTXCilWvU4St9iUa6Nn9v8pr6zFbt6X8la3yk4jwcD8E2zFzWQlFS2rjtuuGdJOfQTEuRfb9jMHIPEwn4Pnu0eiNT7_U5-8fPB98AWn2mpAZYwzN2z3ujQ_n6gc2aU84uMPjLPwtzvZC4PdaTmKW7Oq0NbW56PiMHVSaW8qaBnXr-mnro32lysrgihM-Ocyd5JK8wJ1_OO6JdJJOPwsko6MFbQsmuwKquTlpwQMdFiXKosr5aDGQ4blMK40iaoefs6DixkB29lPCLlZLWhbmlK5aPsSzVNGsbdMMwuri6-_FOR3elPV74Sz0CA_Ow8hcRS7M0AtoTCpjCJHGjEmlYTa1xNeYXo258SRQUEOTntLwkRhA5oZ5I8T0F_O__wOkZwqnAgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtSC1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzMyMTM3NDg3LCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=',
           tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
           settings: {
             panes: {
               filters: {
                 expanded: false,
                 visible: false
               }
             },
             /*background: models.BackgroundType.Transparent,*/
           }
         }}

         eventHandlers = {
           new Map([
             ['loaded', function () {console.log('Report loaded');}],
             ['rendered', function () {console.log('Report rendered');}],
             ['error', function (event) {console.log(event.detail);}],
             ['visualClicked', () => console.log('visual clicked')],
             ['pageChanged', (event) => console.log(event)],
           ])
         }

         cssClassName = { "Embed-container" }

         getEmbeddedComponent = { (embeddedReport) => {
           /*this.report = embeddedReport as Report;*/
           window.report = embeddedReport
         }}
       />
</header>
    </div>
  );
}

export default App;
