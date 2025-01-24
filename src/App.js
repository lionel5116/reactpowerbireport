import logo from './logo.svg';
import './App.css';
import {models} from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';

function App() {
  //var token = 'H4sIAAAAAAAEAB3Tx66DVgBF0X95UyKZYlqkDOjFYHqdXeDSTO84yr_nJfM9Wjrn7x8b3N0Iip8_fxD2mwdmP5lBRSlM9qi6XS7AVceoN239UnMbgd1hRpxklz6g7VjA8DlVhnXCyNGi3llaZw-RVCKNnzsuop7jdKUxhVSs9fFngZgdVRRM8czXOquxd3wXHBOzxhDCyCPWpk1GCYBDmwSlGA3PNOuU8GOycAROiOjkMo54wuMieMfb_iA6nA_MZDgZCRUq5fXIuFXUh8S-9Jf-SSoThsLqrVqdBY1vnLBpSGGn8903J7T7jMjDnYDRoBDNAmY9ETqTl-9ydol_21SADP2raZBaKH0gKFcdgvVjMzh1SgBRWaaxa0DwTwq3Hh1HVWfB7rwbyWnOn4kwXLfao8KFMyVK807lJq5LIcjNarZPWXWVPqeOEB10P7QN_R7MpAV2kAUiHKrIjD9hVKIjREpMFzsO67lyMBra_WZd3D2SsBdvSgWBv4UZVSYuoVnXgLcDa_foyrQsHV8IfiKP5e3KoZql54B67rcfsXqBoUp5DOUf-kd9Cr3P1-338hzsAOegEk2ev4_gu5SYPbntq1dyb4AMSkWmEUpkIXi32pChGJDDdiSUXzZHngPNcNIGBPhQ6bkn5uIx4qJnxtNBNJJzsEfDqLbds5XN1zgVuyxiOcjiazH6vD9Z10qS1WC-I-at24ydJPQpa3xwmEx6jmRGOPsXuX5R0nvHBKVS0v55UcKbxtzRMvjibC15TizvqZjN8ZJi17HNV7PSpQN4F-43HjCvN88RhnSWBByvr-pJHzkLz4k0JC4qrNg0UAgae9KBpKG6Wirk8vPHj7Dc0za-4P17B5c_22dIjUpAw4pyNHr2ScNmS4w_-oaVlayCn-aglhLO4Iml1aFlIuuv8xuTaXeXngHvQEJaqtGbrZgQZVGQYXRyN_R69n1K7UM0dILuuBXw_QiOvtuUY3AJ5TCx0BAE-SuO_u4-OChxjp93-JtohdpI41t-o0sVF_4SBMiuyuTMITQAaG09pjWFVciQ-VYNUDJiSAWLkx_F3p47iq4IhYQpar1S_MTtbdFUkKurnJ4exb_jHka5IsTeqJe4-sJCOiM7rHnKyll_0Ey5zGpuxYn2zplAXQpeZPOgBH0cbVwl7FtYGUVLSU2PUjA0EiaAuSI18ggeTRZZt_T9SJ2dG5Lz11__Md9TDRct_FV-fy5i7cpxdQs5NE1lRvllOv-vvKYawLYv8Dcb1nS7Wb48WRxgLx9WMFgkngxOhzcuYMQ1IPdtoK2APji_LmRpdNBsrlH6Le7brSKDGoXd0WImeFo1d7xyZafUtIfYbKuQojMf32kRQQbR87BIbz3KTlxq1Hc9qZ1qucQ7c7DfgdqhIGZ5uY_ka6KA5lVaO4MVH0Jk7-Nzad-X9nWIAvfH12CjhQloB20aW9YlxxwKP-V5nJMyj850VylFL6S_Wyozgan2eXVvOJVYmYfQh5vc9BtFmATitjkH9ogwIYIXzRMn_NRB3o3O1A9kyRynEfz4arcrZ-rwEkTw1KX1jIyPdj2ZdWBeiXf79uweXiFzBAEQja-Q7xFv19UnRPXL_M-_0XSBCgIGAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtSC1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzM3NzM0MjI3LCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=';
  return (
    <div className="App">
      <header className="App-header">
       
       <PowerBIEmbed
         embedConfig = {{
           type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
           id: '0a822456-7636-4715-81d6-be8c0210fa9e',
           embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=0a822456-7636-4715-81d6-be8c0210fa9e&groupId=3d8f7884-bddb-4b88-8762-b8680352fe37&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtSC1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
           accessToken: 'H4sIAAAAAAAEAB3Tx66DVgBF0X95UyKZYlqkDOjFYHqdXeDSTO84yr_nJfM9Wjrn7x8b3N0Iip8_fxD2mwdmP5lBRSlM9qi6XS7AVceoN239UnMbgd1hRpxklz6g7VjA8DlVhnXCyNGi3llaZw-RVCKNnzsuop7jdKUxhVSs9fFngZgdVRRM8czXOquxd3wXHBOzxhDCyCPWpk1GCYBDmwSlGA3PNOuU8GOycAROiOjkMo54wuMieMfb_iA6nA_MZDgZCRUq5fXIuFXUh8S-9Jf-SSoThsLqrVqdBY1vnLBpSGGn8903J7T7jMjDnYDRoBDNAmY9ETqTl-9ydol_21SADP2raZBaKH0gKFcdgvVjMzh1SgBRWaaxa0DwTwq3Hh1HVWfB7rwbyWnOn4kwXLfao8KFMyVK807lJq5LIcjNarZPWXWVPqeOEB10P7QN_R7MpAV2kAUiHKrIjD9hVKIjREpMFzsO67lyMBra_WZd3D2SsBdvSgWBv4UZVSYuoVnXgLcDa_foyrQsHV8IfiKP5e3KoZql54B67rcfsXqBoUp5DOUf-kd9Cr3P1-338hzsAOegEk2ev4_gu5SYPbntq1dyb4AMSkWmEUpkIXi32pChGJDDdiSUXzZHngPNcNIGBPhQ6bkn5uIx4qJnxtNBNJJzsEfDqLbds5XN1zgVuyxiOcjiazH6vD9Z10qS1WC-I-at24ydJPQpa3xwmEx6jmRGOPsXuX5R0nvHBKVS0v55UcKbxtzRMvjibC15TizvqZjN8ZJi17HNV7PSpQN4F-43HjCvN88RhnSWBByvr-pJHzkLz4k0JC4qrNg0UAgae9KBpKG6Wirk8vPHj7Dc0za-4P17B5c_22dIjUpAw4pyNHr2ScNmS4w_-oaVlayCn-aglhLO4Iml1aFlIuuv8xuTaXeXngHvQEJaqtGbrZgQZVGQYXRyN_R69n1K7UM0dILuuBXw_QiOvtuUY3AJ5TCx0BAE-SuO_u4-OChxjp93-JtohdpI41t-o0sVF_4SBMiuyuTMITQAaG09pjWFVciQ-VYNUDJiSAWLkx_F3p47iq4IhYQpar1S_MTtbdFUkKurnJ4exb_jHka5IsTeqJe4-sJCOiM7rHnKyll_0Ey5zGpuxYn2zplAXQpeZPOgBH0cbVwl7FtYGUVLSU2PUjA0EiaAuSI18ggeTRZZt_T9SJ2dG5Lz11__Md9TDRct_FV-fy5i7cpxdQs5NE1lRvllOv-vvKYawLYv8Dcb1nS7Wb48WRxgLx9WMFgkngxOhzcuYMQ1IPdtoK2APji_LmRpdNBsrlH6Le7brSKDGoXd0WImeFo1d7xyZafUtIfYbKuQojMf32kRQQbR87BIbz3KTlxq1Hc9qZ1qucQ7c7DfgdqhIGZ5uY_ka6KA5lVaO4MVH0Jk7-Nzad-X9nWIAvfH12CjhQloB20aW9YlxxwKP-V5nJMyj850VylFL6S_Wyozgan2eXVvOJVYmYfQh5vc9BtFmATitjkH9ogwIYIXzRMn_NRB3o3O1A9kyRynEfz4arcrZ-rwEkTw1KX1jIyPdj2ZdWBeiXf79uweXiFzBAEQja-Q7xFv19UnRPXL_M-_0XSBCgIGAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtSC1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzM3NzM0MjI3LCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=',
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
