import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
    {
        emoji: '🌐',
        title: 'Permissionless',
        description: (
            <>
                Unlock infinite possibilities. Designed with modularity at its core, 
                allowing developers to customize and extend functionality effortlessly.
            </>
        ),
    },
    {
        emoji: '🎨',
        title: 'Focus on Creativity',
        description: (
            <>
                Turn ideas into reality. Developers build the tools — communities decide how to use them.
                Build, integrate, and expand what’s possible — your vision, your rules.
            </>
        ),
    },
    {
        emoji: '🫂',
        title: 'Powered by Community',
        description: (
            <>
                Leverage the power of our community-led protocol — where active participation is rewarded 
                — just limitless, shared advancement.
            </>
        ),
    },
]

function Feature({emoji, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--left padding-horiz--md">
                <h1>{emoji}</h1>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row" style={{margin: '100px 0'}}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}
