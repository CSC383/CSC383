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
	
	
		firebase.database().ref("data_dashboard").on("value", snap => {	
			
			var labor_force_size = snap.child("labor_force_size").val();
			var average_annual_wage = snap.child("average_annual_wage").val();
			var gross_domestic_product = snap.child("gross_domestic_product").val();
			
			var ctx = document.getElementById("myChart1");
			var myChart = new Chart(ctx, {
		    		type: 'bar',
		    		data: {
					labels: ["Labor Force Size", "Average Annual Wage", "Gross Domestic Product"],
					datasets: [{
			    			label: 'General Economic Performance',
			    			data: [labor_force_size, average_annual_wage, gross_domestic_product],
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
		    
					
			var unemployment_rate = snap.child("unemployment_rate").val();
			var poverty_rate = snap.child("poverty_rate").val();
			var closings = snap.child("closings").val();
	
			var dtx = document.getElementById("myChart2");
			var myChart = new Chart(dtx, {
		    		type: 'line',
		    		data: {
					labels: ["Unemployment Rate", "Poverty Rate", "Closings"],
					datasets: [{
			    		label: 'Test line Graph',
			    		data: [unemployment_rate, poverty_rate, closings],
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
	
			var cost_of_living = snap.child("cost_of_living").val();
			var new_housing_costs = snap.child("new_housing_costs").val();
			var average_annual_commute_time = snap.child("average_annual_commute_time").val();
			var jobs_employed_resident_ratio = snap.child("jobs_employed_resident_ratio").val();
	
			var pie_data = {
    				labels: [
        			"Cost of Living",
        			"New Housing Costs",
        			"Average Annual Commute Time",
        			"Jobs Employed Resident Ratio"
    				],
    				datasets: [
        			{
            			data: [cost_of_living, new_housing_costs, average_annual_commute_time, jobs_employed_resident_ratio],
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
	
			var new_business_starts = snap.child("new_business_starts").val();
			var stage_ii_establishments = snap.child("stage_ii_establishments").val();
			var sbir_grants = snap.child("sbir_grants").val();
			var stem_employment = snap.child("stem_employment").val();
			var broadband_access = snap.child("broadband_access").val();
			var churn_rate = snap.child("churn_rate").val();
	
			var bubble_data = {
				datasets: [{
					label: 'First Dataset',
					data: [
						{
							x: new_business_starts,
							y: stage_ii_establishments,
							r: 2
						}
					],
					backgroundColor:"#FF6384",
					hoverBackgroundColor: "#FF6384",
				},
				{
					label: 'Second Dataset',
					data: [
						{
							x: sbir_grants,
							y: stem_employment,
							r: 2
						}
					],
					backgroundColor:"#36A2EB",
					hoverBackgroundColor: "#36A2EB",
				},
				{
					label: 'Third Dataset',
					data: [
						{
							x: broadband_access,
							y: churn_rate,
							r: 2
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
			
		});
};
