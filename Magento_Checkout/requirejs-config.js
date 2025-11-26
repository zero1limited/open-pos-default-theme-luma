var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/customer-email-validator': {
                'Magento_Checkout/js/model/customer-email-validator-mixin': true
            },
            'Magento_Checkout/js/action/place-order': {
                'Magento_Checkout/js/action/place-order-mixin': true
            },
            'Magento_Checkout/js/action/set-payment-information-extended': {
                'Magento_Checkout/js/action/set-payment-information-extended-mixin': true
            }
        }
    }
};