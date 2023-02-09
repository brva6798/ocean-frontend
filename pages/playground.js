import Typography from '/components/Typography';
import OptionBar from '/components/playground/optionbar';
import MainLayout from '/layouts/MainLayout';
import { formatMonetaryValue, formatNumberComma } from '/utils/format';
import { Line as LineChart } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';

const Playground = () => {

	const options = {
		animation: true,
		cornerRadius: 20,
		layout: { padding: 0 },
		legend: { display: false },
		maintainAspectRatio: false,
		responsive: true,
		xAxes: [
			{
				ticks: {
					fontColor: '#FFFFFF',
				},
				gridLines: {
					display: false,
					drawBorder: false,
				},
			},
		],
		yAxes: [
			{
				ticks: {
					fontColor: 'FFFFFF',
					beginAtZero: true,
					min: 0,
				},
				gridLines: {
					borderDash: [2],
					borderDashOffset: [2],
					color: '#FFFFFF',
					drawBorder: false,
					zeroLineBorderDash: [2],
					zeroLineBorderDashOffset: [2],
					zeroLineColor: '#FFFFFF',
				},
			},
		],
		tooltips: {
			backgroundColor: '#FFFFFF',
			bodyFontColor: '#FFFFFF',
			borderColor: '#FFFFFF',
			borderWidth: 1,
			enabled: true,
			footerFontColor: '#FFFFFF',
			intersect: false,
			mode: 'index',
			titleFontColor: '#FFFFFF',
		},
	};

	const data = {
		labels: ['12/21','12/22','12/23','12/24','12/25','12/26'],
		datasets: [
			{
				label: 'Aggregate Value',
				borderColor: '#FFFFFF',
				backgroundColor: '#FFFFFF',
				data: [{
                    x:10,
                    y:10
                },{
                    x:20,
                    y:20
                },{
                    x:20,
                    y:18
                },{
                    x:20,
                    y:18
                },{
                    x:20,
                    y:18
                },{
                    x:20,
                    y:19
                }], 
				tension: 0.3,
			},
		],
	};

    const accountInfo= {
        accountValue: 12230,
        firstName: 'Joseph',
        lastName: 'Snyder',
        pctChange: .045,
        holdings: [
            {name: 'Tesla Motors',
            ticker: 'TSLA',
            price: 109.10,
            shares: 3,
            pools:
            [
                
            ]
            },
            {name: 'GEO Group',
            ticker: 'GEO',
            price: 11.34,
            shares: 43
            },
            {name: 'Tesla Motors',
            ticker: 'Apple',
            price: 109.10,
            shares: 3
            },
            {name: 'GEO Group',
            ticker: 'GEO',
            price: 11.34,
            shares: 43
            },
            {name: 'Tesla Motors',
            ticker: 'TSLA',
            price: 109.10,
            shares: 3
            },
            {name: 'GEO Group',
            ticker: 'GEO',
            price: 11.34,
            shares: 43
            },
        ],
        pools:
        [
            {
                name: 'SNOOP DOGG 420$$$$$',
                oceanTicker: 'SNP',
                price: 1200,
                shares: .04,
                changeP7d:.1
            },
            {
                name: 'Martha Stewart Definitely Not Fraud',
                oceanTicker: 'MSDFN',
                price: 1200,
                shares: .10,
                changeP7d:-.03
            },
        ]
    }
return(
    <div className="w-full">
        <div className="max-w-4xl m-auto">
        <Typography variant="h2" className="text-white">Welcome back, {accountInfo.firstName}</Typography>
    <div className="grid grid-cols-12 ml-2">
        <div className="col-span-2">
            <OptionBar />
        </div>
        <div className="text-white px-2 col-span-10">
            <div>
                Total account value: ${formatMonetaryValue(accountInfo.accountValue)}
            </div>
            <div>
                P30D change: <span className="text-red-500">-{accountInfo.pctChange * 100}%</span> -$66
            </div>
            <div>
                {accountInfo.pools.map((pool, i)=> {
                    return(
                        <div key={i} className="flex flex-col outline p-2 rounded-lg outline-1 outline-white my-2">
                            <div>
                               <Typography variant="subtitle">{pool.name} </Typography>
                            </div> 
                            <div className="flex">
                              <Typography variant="body" className="text-blue-500">#{pool.oceanTicker} </Typography>
                              <Typography className={pool.changeP7d > 0 ? 'text-green-500 px-2' : 'text-red-500 px-2'}>{' '}{pool.changeP7d * 100}%</Typography>
                            </div>
                            <div>
                            <LineChart data={data} options={options} />
                              </div>  
                        </div>   
                    )
                })}
            </div>
            <div className="outline p-2 rounded-lg outline-1 outline-white outline-offset-1">
                Top Overall Holdings:
                <div className="grid grid-cols-5 pb-2 px-3 bg-primary text-white py-2 mb-1">
									<div>Ticker</div>
									<div>Name</div>
									<div>Price</div>
									<div>Shares</div>
                                    <div>Total Value</div>
								</div>
                {accountInfo.holdings.map((holding, i) => {
									return (
										<div
											className={
												i % 2 == 0
													? 'grid grid-cols-5 py-2 bg-blue-100 rounded-sm px-3 text-gray-800'
													: 'grid grid-cols-5 py-2 px-3'
											}
											key={i}>
											<div>{holding.ticker}</div>
											<div>{holding.name}</div>
											<div>${formatMonetaryValue(holding.price)}</div>
											<div>{formatNumberComma(holding.shares)}</div>
                                            <div>${formatMonetaryValue(holding.price * holding.shares)}</div>
										</div>
									);
								})}
                        <div>
                </div>
            </div>
            <div>
                -
            </div>
        </div>
    </div>
    </div>
    </div>
)
};
export default Playground;
Playground.getLayout = (page) => <MainLayout>{page}</MainLayout>;