define([
    'Magento_Checkout/js/model/quote',
    'mage/utils/wrapper'
], function (quote, wrapper) {
    'use strict';

    return function (setPaymentInformationExtendedAction) {
        return wrapper.wrap(setPaymentInformationExtendedAction, function (originalAction, messageContainer, paymentData, skipBilling) {
            // Email field is missing
            // Add the email from quote that has been set in Zero1\OpenPos\Observer\SetQuoteAddressObserver
            if (!quote.guestEmail) {
                if (window.checkoutConfig.quoteData && window.checkoutConfig.quoteData.customer_email) {
                    quote.guestEmail = window.checkoutConfig.quoteData.customer_email;
                }
            }

            return originalAction(messageContainer, paymentData, skipBilling);
        });
    };
});