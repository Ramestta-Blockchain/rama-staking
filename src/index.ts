import { BridgeClient, IPOSClientConfig } from "@ramestta/ramajs";
import { RamaToken, StakeManager, ValidatorShare } from "./contracts";

export class StakingClient extends BridgeClient<IPOSClientConfig> {
    stakeManager: StakeManager;
    ramaToken: RamaToken;

    init(config: IPOSClientConfig) {
        const client = this.client;
        return client.init(config).then(_ => {
            const mainPlasmaContracts = client.mainPlasmaContracts;
            const stakeManagerProxyAddress = mainPlasmaContracts.StakeManagerProxy;
            const ramaTokenAddress = mainPlasmaContracts.Tokens.RamaToken;
            this.stakeManager = new StakeManager(client, stakeManagerProxyAddress);
            this.ramaToken = new RamaToken(client, ramaTokenAddress, stakeManagerProxyAddress);
        });
    }

    validatorShare(address: string) {
        return new ValidatorShare(
            this.client,
            address
        );
    }

}