import React from 'react'
import micimg from '../../../../images/vendorLogos/2.png'
import './Microsoft.css';
import CamNavbar from '../Navbar/Navbar';
import CamChat from '../ChatBot/Chat';
import CamFooter from '../Footer/Footer';

function Microsoft() {
    return (
        <>
        <CamNavbar/>
        <CamChat/>
        <div className='section'>
            <div className='container'>
                <div className='row firstrow'>
                    <div className='col-lg-3'>
                        <img src={micimg} className='miclogo' />
                    </div>

                    <div className='col-lg'>
                        <p className='AuthText'>Cloud Solution Provider </p>
                    </div>

                    <div className='col'></div>
                </div>
                <div className='row descontainer'>
                    {/* Column one */}
                    <div className='col'>
                        <h6 className='micsectopic'>Microsoft Security</h6>
                        <dl className='unlisted'>
                            <dt>Security AI</dt>
                            <dd>- Microsoft Security Copilot</dd>
                        </dl>

                        <dl className='unlisted'>
                            <dt>Identity & Access</dt>
                            <dd>- Azure Active Directory part of Microsoft Entra </dd>
                            <dd>- Microsoft Entra Identity Governance </dd>
                            <dd>- Microsoft Entra Permissions Management </dd>
                            <dd>- Microsoft Entra Verified ID </dd>
                            <dd>- Microsoft Entra Workload Identities </dd>
                            <dd>- Azure Key Vault  </dd>
                        </dl>

                        <dl className='unlisted'>
                            <dt>SIEM & XDR</dt>
                            <dd>- Microsoft Sentinel </dd>
                            <dd>- Microsoft Defender for Cloud </dd>
                            <dd>- Microsoft 365 Defender </dd>
                            <dd>- Microsoft Defender for Endpoint </dd>
                            <dd>- Microsoft Defender for Office 365 </dd>
                            <dd>- Microsoft Defender for Identity </dd>
                            <dd>- Microsoft Defender for Cloud Apps </dd>
                            <dd>- Microsoft Defender Vulnerability Management </dd>
                            <dd>- Microsoft Defender Threat Intelligence </dd>
                        </dl>
                    </div>

                    {/* Column two */}
                    <div className='col'>
                        <h6 className='micsectopic'>Microsoft Security</h6>

                        <dl className='unlisted'>
                            <dt>Cloud Security</dt>
                            <dd>- Microsoft Defender for Cloud  </dd>
                            <dd>- Microsoft Defender Cloud Security Posture </dd>
                            <dd>- Microsoft Defender for DevOps </dd>
                            <dd>- Microsoft Defender External Attack </dd>
                            <dd>- Surface Management </dd>
                            <dd>- Azure Firewall </dd>
                            <dd>- Azure Web App Firewall </dd>
                            <dd>- Azure DDoS Protection </dd>
                            <dd>- GitHub Advanced Security </dd>
                        </dl>

                        <dl className='unlisted'>
                            <dt>Endpoint Security & Management</dt>
                            <dd>- Microsoft Defender for Endpoint  </dd>
                            <dd>- Microsoft 365 Defender  </dd>
                            <dd>- Microsoft Intune core capabilities  </dd>
                            <dd>- Microsoft Intune Endpoint Privilege Management </dd>
                            <dd>- Microsoft Intune Remote Help </dd>
                            <dd>- Microsoft Defender for IoT </dd>
                            <dd>- Microsoft Defender for Business  </dd>
                            <dd>- Microsoft Defender Vulnerability Management </dd>
                        </dl>
                    </div>

                    {/* Column three */}
                    <div className='col'>
                        <h6 className='micsectopic3'>Microsoft Modern Workplace</h6>

                        <dl className='unlisted'>
                            <dd>- Microsoft 365 </dd>
                            <dd>- Office 365 </dd>
                            <dd>- Windows 10 Enterprise </dd>
                            <dd>- Enterprise Mobility + Security (EMS) </dd>
                            <dd>- Business Process Automationt </dd>
                        </dl>
                    </div>

                    <div className='row'>
                    <div className='bton'>
                        <a href="https://www.microsoft.com/en-lk/" target='_blank' rel='noopener noreferrer' className='websiteButtonmic'>More</a>
                        <a href="https://www.microsoft.com/en-lk/" target='_blank' rel='noopener noreferrer' className='websiteButtonmic'>Inquiry</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <CamFooter/>
        </>
    )
}

export default Microsoft