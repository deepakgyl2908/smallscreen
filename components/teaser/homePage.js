import React from 'react';
import styles from './homePage.module.css';

export default class HomePageTeaser extends React.Component {
    render() {
        return (
            <div className={`container text-center box-shadow showcase ${styles.teaser}`}>
                <div className="row">
                    <div className={`col-lg-4 ${styles.block}`}>
                        <h3 className={`title ${styles.teaserTitle}`}>
                            Easy to Use
                        </h3>
                        <p className="no-pad content">Clean & fully commented code and a stunning documentation make it very easy to use</p>
                    </div>
                    <div className={`col-lg-4 border ${styles.block}`}>
                        <h3 className={`title ${styles.teaserTitle}`}>
                            Dead simple
                        </h3>
                        <p className="no-pad content">Very lightweight, easy to use and fast loading code. Clean design focused on good readability.</p>
                    </div>
                    <div className={`col-lg-4 ${styles.block}`}>
                        <h3 className={`title ${styles.teaserTitle}`}>
                            Coder friendly
                        </h3>
                        <p className="no-pad content">With the Concept template you can create professional and beautiful business or personal website.</p>
                    </div>
                </div>
            </div>
        )
    }
}