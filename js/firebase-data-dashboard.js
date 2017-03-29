window.onload = function(){
		var labor_force_size = document.getElementById('labor_force_size')
		var labor_force_size_ref = firebase.database().ref('data_dashboard').child('labor_force_size');
		labor_force_size_ref.on('value', snap => labor_force_size.innerText = snap.val());
	
		var average_annual_wage = document.getElementById('average_annual_wage')
		var average_annual_wage_ref = firebase.database().ref('data_dashboard').child('average_annual_wage');
		average_annual_wage_ref.on('value', snap => average_annual_wage.innerText = snap.val());
	
		var average_annual_commute_time = document.getElementById('average_annual_commute_time')
		var average_annual_commute_time_ref = firebase.database().ref('data_dashboard').child('average_annual_commute_time');
		average_annual_commute_time_ref.on('value', snap => average_annual_commute_time.innerText = snap.val());
	
		var broadband_access = document.getElementById('broadband_access')
		var broadband_access_ref = firebase.database().ref('data_dashboard').child('broadband_access');
		broadband_access_ref.on('value', snap => broadband_access.innerText = snap.val());
	
		var churn_rate = document.getElementById('churn_rate')
		var churn_rate_ref = firebase.database().ref('data_dashboard').child('churn_rate');
		churn_rate_ref.on('value', snap => churn_rate.innerText = snap.val());
	
		var closings = document.getElementById('closings')
		var closings_ref = firebase.database().ref('data_dashboard').child('closings');
		closings_ref.on('value', snap => closings.innerText = snap.val());
	
		var cost_of_living = document.getElementById('cost_of_living')
		var cost_of_living_ref = firebase.database().ref('data_dashboard').child('cost_of_living');
		cost_of_living_ref.on('value', snap => cost_of_living.innerText = snap.val());
	
		var gross_domestic_product = document.getElementById('gross_domestic_product')
		var gross_domestic_product_ref = firebase.database().ref('data_dashboard').child('gross_domestic_product');
		gross_domestic_product_ref.on('value', snap => gross_domestic_product.innerText = snap.val());
	
		var jobs_employed_resident_ratio = document.getElementById('jobs_employed_resident_ratio')
		var jobs_employed_resident_ratio_ref = firebase.database().ref('data_dashboard').child('jobs_employed_resident_ratio');
		jobs_employed_resident_ratio_ref.on('value', snap => jobs_employed_resident_ratio.innerText = snap.val());
	
		var new_business_starts = document.getElementById('new_business_starts')
		var new_business_starts_ref = firebase.database().ref('data_dashboard').child('new_business_starts');
		new_business_starts_ref.on('value', snap => new_business_starts.innerText = snap.val());
	
		var new_housing_costs = document.getElementById('new_housing_costs')
		var new_housing_costs_ref = firebase.database().ref('data_dashboard').child('new_housing_costs');
		new_housing_costs_ref.on('value', snap => new_housing_costs.innerText = snap.val());
	
		var poverty_rate = document.getElementById('poverty_rate')
		var poverty_rate_ref = firebase.database().ref('data_dashboard').child('poverty_rate');
		poverty_rate_ref.on('value', snap => poverty_rate.innerText = snap.val());
	
		var sbir_grants = document.getElementById('sbir_grants')
		var sbir_grants_ref = firebase.database().ref('data_dashboard').child('sbir_grants');
		sbir_grants_ref.on('value', snap => sbir_grants.innerText = snap.val());
	
		var stage_ii_establishments = document.getElementById('stage_ii_establishments')
		var stage_ii_establishments_ref = firebase.database().ref('data_dashboard').child('stage_ii_establishments');
		stage_ii_establishments_ref.on('value', snap => stage_ii_establishments.innerText = snap.val());
	
		var stem_employment = document.getElementById('stem_employment')
		var stem_employment_ref = firebase.database().ref('data_dashboard').child('stem_employment');
		stem_employment_ref.on('value', snap => stem_employment.innerText = snap.val());
	
		var unemployment_rate = document.getElementById('unemployment_rate')
		var unemployment_rate_ref = firebase.database().ref('data_dashboard').child('unemployment_rate');
		unemployment_rate_ref.on('value', snap => unemployment_rate.innerText = snap.val());

		var ctx = document.getElementById("myChart1");
		var myChart = new Chart(ctx, {
		    	type: 'bar',
		    	data: {
				labels: ["Business Startups", "Unemployment", "Average Commute", "Labor Force", "Broadband", "Churn Rate"],
				datasets: [{
			    		label: 'Test Bar Graph',
			    		data: [2, 3, 1, 1 5, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
			    		],
			    		borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
			    		],
			    		borderWidth: 1
				}]
		    	},
		    	options: {
				scales: {
			    		yAxes: [{
						ticks: {
				    			beginAtZero:true
						}
			    		}]
				}
		    	}
		});
			
	
	var dtx = document.getElementById("myChart2");
		var myChart = new Chart(dtx, {
		    type: 'line',
		    data: {
			labels: ["2015", "2013", "2014", "2015", "2016", "2017"],
			datasets: [{
			    label: 'Test line Graph',
			    data: [2, 3, 5, 3, 3.5, 2],
				backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
			    ],
			    borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			    ],
			    borderWidth: 1
			}]
		    },
		    options: {
			scales: {
			    yAxes: [{
				ticks: {
				    beginAtZero:true
				}
			    }]
			}
		    }
		});
	
	var pie_data = {
    		labels: [
        	"Variable One",
        	"Variable Two",
        	"Variable Three"
    		],
    		datasets: [
        	{
            	data: [300, 50, 100],
            	backgroundColor: [
                	"#FF6384",
                	"#36A2EB",
                	"#FFCE56"
            	],
           	 hoverBackgroundColor: [
                	"#FF6384",
                	"#36A2EB",
                	"#FFCE56"
            	]
        	}]
	};
	var etx = document.getElementById("myChart3");
	var myPieChart = new Chart(etx,{
    		type: 'pie',
    		data: pie_data,
    		options: {
        		animation:{
            			animateScale:true
        		}
    		}
	});
	
	var bubble_data = {
		datasets: [{
			label: 'First Dataset',
			data: [
				{
					x: 20,
					y: 30,
					r: 15
				},
				{
					x: 40,
					y: 10,
					r: 10
				}
			],
			backgroundColor:"#FF6384",
			hoverBackgroundColor: "#FF6384",
		},
		{
			label: 'Second Dataset',
			data: [
				{
					x: 5,
					y: 25,
					r: 30
				},
				{
					x: 15,
					y: 15,
					r: 20
				}
			],
			backgroundColor:"#36A2EB",
			hoverBackgroundColor: "#36A2EB",
		}]
	};
	
	var ftx = document.getElementById("myChart4");
	var myBubbleChart = new Chart(ftx,{
    		type: 'bubble',
    		data: bubble_data,
    		options: {
        		elements: {
           			 points: {
                			borderWidth: 1,
                			borderColor: 'rgb(0, 0, 0)'
            			}
        		}
    		}
	});
};
