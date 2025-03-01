import React from 'react';
import unicef_logo from '../img/unicef-logo.png';
import jss_logo from '../img/jss-logo.webp';
import ihmp_logo from '../img/ihmp-logo.png';
import yenepoya_logo from '../img/yenepoya.png';
import sewa_rural_logo from '../img/authority/sewa-rural.jpeg';
import SecondaryCTAButton from './SecondaryCTAButton';

const Authority = ({}) => (
    <div className="container" style={{alignItems: 'center', flexDirection: 'column', display: 'flex'}}>
        <div className="has-text-centered">
            <h2 className="is-size-2-mobile is-size-2-tablet is-size-3-widescreen has-text-weight-bold">
                <u>Avni is trusted by</u>
            </h2>
            <br/>
            <div id="avni-customers" className="columns is-mobile is-multiline"
                 style={{alignItems: 'center', flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                <div className="column is-4-tablet is-one-third-mobile" style={{marginTop: '-0.4em'}}>
                    <img loading="lazy" src={unicef_logo} alt="UNICEF"/>
                </div>
                <div className="column is-4-tablet is-one-third-mobile">
                    <img loading="lazy" src={sewa_rural_logo} alt="Sewa Rural"/>
                    <h5 className="has-text-grey has-text-weight-bold">Sewa Rural</h5>
                </div>
                <div className="column is-4-tablet is-one-third-mobile">
                    <img loading="lazy" src={ihmp_logo} alt="Institute of Health Management, Pachod"/>
                </div>
                <div className="column is-4-tablet is-one-third-mobile">
                    <img loading="lazy" src={yenepoya_logo} alt="Yenepoya University"/>
                </div>
                <div className="column is-4-tablet is-one-third-mobile">
                    <img loading="lazy" src={jss_logo} alt="Jan Swasthya Sahyog, Bilaspur"/>
                </div>
            </div>
        </div>
        <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-around'}}>
            <SecondaryCTAButton text="All projects" link="/case-studies#avni-implementations"/>
            <span style={{marginLeft: 5}}/>
            <SecondaryCTAButton text="Case studies" link="/case-studies"/>
        </div>
        <br/>
    </div>
);

Authority.propTypes = {};

export default Authority;
