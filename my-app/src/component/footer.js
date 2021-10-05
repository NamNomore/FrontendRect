import React, { Component } from 'react';

class footer extends Component {
    render() {
        return (
            <div>
                <div className="info-web">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-muted">
                        <p>Nam Nomore</p>
                        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.24h.com.vn%2F&width=150&layout=button_count&action=like&size=small&share=true&height=46&appId=2349031858555066" width={150} height={46} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />       </div>
                    </div>
                    </div>
                </div>
                <div className="footer">
                </div>
            </div>

        );
    }
}

export default footer;