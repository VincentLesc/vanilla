/**
 * @author Adam (charrondev) Charron <adam.c@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import FullPageLoader from "@library/components/FullPageLoader";
import { ModalSizes } from "./ModalSizes";
import Modal from "./Modal";

interface IProps extends RouteComponentProps<{}> {}

/**
 * Page for editing an article.
 */
class ModalLoader extends React.Component<IProps> {
    public render() {
        return (
            <Modal size={ModalSizes.FULL_SCREEN} exitHandler={this.navigateToBacklink}>
                <FullPageLoader />
            </Modal>
        );
    }

    /**
     * Route back to the previous location if its available.
     */
    private navigateToBacklink = () => {
        this.props.history.push(this.props.location.state.lastLocation || "/kb");
    };
}

export default withRouter<IProps>(ModalLoader);
