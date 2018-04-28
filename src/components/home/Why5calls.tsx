import * as React from 'react';
import i18n from '../../services/i18n';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { CallCount } from '../shared';
import * as Constants from '../../common/constants';

interface Props {
  readonly totalCount: number;
  readonly t: TranslationFunction;
}

export const Why5calls: React.StatelessComponent<Props> = (props: Props) => (
  <div className="hypothesis" >
    <header className="hypothesis__header">
      <h1 className="hypothesis__title">Make Your Shirt Heard</h1>
      <h2 className="hypothesis__subtitle">
        {/*tslint:disable-next-line:max-line-length*/}
        <a href={Constants.TSHIRTS_URL}>TWO WEEKS ONLY</a>: Grab a limited edition 5 Calls t-shirt, the perfect attire for Town Halls, Protests and Marches!
      </h2>
      <div className="hypothesis__shirts">
        <a href={Constants.TSHIRTS_URL}><img src="/img/5calls-shirts@2x.png" alt="5 Calls T-Shirts"/></a>
      </div>
      {/*tslint:disable-next-line:max-line-length*/}
      <p>We teamed up with our friends at Cotton Bureau to bring you high-quality t-shirts and hats from our 5 Calls design team. Let people know you can Make Your Voice Heard. Proceeds go to supporting 5 Calls: <a href={Constants.TSHIRTS_URL}>Shop Now!</a></p>
      <CallCount
        totalCount={props.totalCount}
        t={i18n.t}
      />
      <p>
        {props.t('hypothesis.p1')}
      </p>
    </header>
  </div>
);

export const Why5callsTranslatable = translate()(Why5calls);
