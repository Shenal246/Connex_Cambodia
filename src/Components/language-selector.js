import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './language-selector.css';

const languages = [
    { code: 'en', lang: 'English', flag: '🌍' },
    { code: 'fr', lang: 'Cambodia', flag: '🌍' },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <select
                className="languageselector"
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
            >
                {languages.map((lng) => (
                    <option key={lng.code} value={lng.code}>
                        {lng.flag} {lng.lang}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
