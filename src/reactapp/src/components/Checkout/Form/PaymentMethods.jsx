import React, { useCallback } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import useCartContext from '../../../hook/useCartContext';
import Button from '../../Common/Button';
import Card from '../../Common/Card';
import RadioInput from '../../Common/Form/RadioInput';
import Header from '../../Common/Header';
import usePaymentMethodFormContext from '../../../hook/usePaymentMethodFormContext';
import { _keys, _objToArray } from '../../../utils';
import { PAYMENT_METHOD_FORM } from '../../../config';

function PaymentMethods() {
  const { paymentMethodList } = useCartContext();
  const isPaymentAvailable = !!_keys(paymentMethodList).length;
  const { fields, submitHandler } = usePaymentMethodFormContext();
  const {
    values,
    touched,
    setFieldValue,
    setFieldTouched,
  } = useFormikContext();
  const buttonDisable = !_get(touched, fields.code);
  const selectedPaymentMethod = _get(values, PAYMENT_METHOD_FORM);

  const handlePaymentMethodSelection = useCallback(
    event => {
      const methodSelected = _get(paymentMethodList, event.target.value);

      if (methodSelected) {
        setFieldValue(fields.code, methodSelected.code);
        setFieldTouched(fields.code, true);
      }
    },
    [paymentMethodList, fields, setFieldValue, setFieldTouched]
  );

  return (
    <Card bg="dark" classes={isPaymentAvailable ? '' : 'opacity-75'}>
      <Header>Payment Methods</Header>
      {!isPaymentAvailable && (
        <div className="h-32 py-4 min-h-12">
          <div className="flex items-center justify-center w-full h-full">
            <div>No payment methods available at the moment</div>
          </div>
        </div>
      )}
      {isPaymentAvailable && (
        <div className="py-4">
          <ul>
            {_objToArray(paymentMethodList).map(method => (
              <li key={method.code} className="flex">
                <RadioInput
                  label={method.title}
                  name="paymentMethod"
                  value={method.code}
                  onChange={handlePaymentMethodSelection}
                  checked={method.code === selectedPaymentMethod.code}
                />
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center mt-2">
            <Button
              click={() => submitHandler(values)}
              variant="success"
              disable={buttonDisable}
            >
              UPDATE
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}

export default PaymentMethods;
