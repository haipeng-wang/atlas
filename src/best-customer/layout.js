import React from 'react';
import { Form, Card } from 'antd';
import 'antd/dist/antd.css';

import StoryBoard from '../story-board';
import storyConfig from './story';
import components from '../components';

const {
  Cell,
  TimeRange,
  SingleSelector,
  PlainData,
  SectionContainer,
  Donut,
  LineWithDataZoom,
} = components;

function WithLabel(Control, label) {
  return props => <Control label={label} {...props} />;
}

function WithChart(Control) {
  return props => <Control {...props.value} {...props} />; //eslint-disable-line
}

export default function () {
  return (<StoryBoard
    components={components}
    story={storyConfig}
    renderComponent={() => (
      <Form>
        <h2>Best User Analysis</h2>
        <SectionContainer id={storyConfig.id}>
          <div key="slicer">
            <Cell output="@time" renderCell={WithLabel(TimeRange, 'Time Range')} />
          </div>
          <Card key="bestUser" title="Best User">
            <Cell input="measureUser" output="@measureUser" renderCell={WithLabel(SingleSelector, 'Measure')} />
            <Cell input="bestUser" title="Best User Card" renderCell={WithChart(PlainData)} />
          </Card>
          <Card key="bestCustomer" title="Best Customer Overview">
            <Cell input="measureCustomer" output="@measureCustomer" renderCell={WithLabel(SingleSelector, 'Measure')} />
            <Cell input="bestCustomerQuery" title="Best Customer Query" renderCell={WithChart(PlainData)} />
            <Cell input="bestCustomerTSAD" title="Best Customer TSAD" renderCell={WithChart(PlainData)} />
          </Card>
          <Card key="bestCustomerExpensePerUser" title="Best Customer Expense Per User">
            <Cell input="granularityCustomer" output="@granularityCustomer" renderCell={WithLabel(SingleSelector, 'Granularity')} />
            <Cell input="customerExpensePerUserBucket" title="Best Customer Expense Per User Bucket" renderCell={WithChart(PlainData)} />
            <Cell input="customerExpensePerUserRank" title="Best Customer Expense Per User TSAD" renderCell={WithChart(PlainData)} />
          </Card>
          <Card key="favor" title="Favor XXX of Best Customers">
            <Cell input="measureFavor" output="@measureFavor" renderCell={WithLabel(SingleSelector, 'Measure')} />
            <Cell input="dimensionFavor" output="@dimensionFavor" renderCell={WithLabel(SingleSelector, 'Dimension')} />
            <Cell input="favorBestCustomerReduce" title="Favor Best Customer Reduce" renderCell={WithChart(PlainData)} />
            <Cell input="favorBestCustomerTrend" title="Favor Customer Trend" renderCell={WithChart(PlainData)} />
          </Card>
          <Card key="mealCard" title="Usage of Meal Card">
            <Cell input="usageMealCardReduce" title="Usage of Meal Card Reduce" renderCell={WithChart(PlainData)} />
            <Cell input="usageMealCardBucketCRAP" title="Usage of Meal Card Bucket CardRechargeAmountPerUU" renderCell={WithChart(PlainData)} />
            <Cell input="usageMealCardQuery" title="Usage of Meal Card Query" renderCell={WithChart(PlainData)} />
            <Cell input="usageMealCardBucketCB" title="Usage of Meal Card CardBalance" renderCell={WithChart(PlainData)} />
          </Card>
          <Card key="revenue" title="Revenue analysis">
            <Cell input="formatRevenue2Line" title="Revenue compare line" renderCell={WithChart(LineWithDataZoom)} />
            <Cell input="top3Revenue" title="Top 3 revenue" renderCell={WithChart(Donut)} />
          </Card>
        </SectionContainer>
      </Form>
    )}
  />);
}
