
# coding: utf-8

# # Assignment 2
# 
# The data for this assignment comes from a subset of The National Centers for Environmental Information (NCEI) [Daily Global Historical Climatology Network](https://www1.ncdc.noaa.gov/pub/data/ghcn/daily/readme.txt) (GHCN-Daily). The GHCN-Daily is comprised of daily climate records from thousands of land surface stations across the globe.
# 
# Each row in the assignment datafile corresponds to a single observation.
# 
# The following variables are provided to you:
# 
# * **id** : station identification code
# * **date** : date in YYYY-MM-DD format (e.g. 2012-01-24 = January 24, 2012)
# * **element** : indicator of element type
#     * TMAX : Maximum temperature (tenths of degrees C)
#     * TMIN : Minimum temperature (tenths of degrees C)
# * **value** : data value for element (tenths of degrees C)

import matplotlib.pyplot as plt
import mplleaflet
import pandas as pd

def leaflet_plot_stations(binsize, hashid):

    df = pd.read_csv('data/C2A2_data/BinSize_d{}.csv'.format(binsize))

    station_locations_by_hash = df[df['hash'] == hashid]

    lons = station_locations_by_hash['LONGITUDE'].tolist()
    lats = station_locations_by_hash['LATITUDE'].tolist()

    plt.figure(figsize=(8,8))

    plt.scatter(lons, lats, c='r', alpha=0.7, s=200)

    return mplleaflet.display()

leaflet_plot_stations(400,'fb441e62df2d58994928907a91895ec62c2c42e6cd075c2700843b89')


# In[2]:

# Load Data
df = pd.read_csv('data/C2A2_data/BinnedCsvs_d400/fb441e62df2d58994928907a91895ec62c2c42e6cd075c2700843b89.csv')
df.head()


# In[4]:

# Dimensions of data
df.shape


# In[5]:

# Stations
df['ID'].unique()


# In[6]:

# Number of unique stations
len(df['ID'].unique())


# In[8]:

df = df.sort_values(by='Date')
df.head()


# In[9]:

decade = df[(df['Date'] >= '2005-01-01') & (df['Date'] < '2015-01-01')]
decade.head()
print(decade['Date'].max())
print(decade['Date'].min())


# In[10]:

year_2015 = df[(df['Date'] >= '2015-01-01')]
year_2015['Date'].min()


# In[16]:

# Change date to datetime formats
decade['Date'] = pd.to_datetime(decade['Date'])


# In[17]:

#Create a month columns
decade['Month'] = pd.DatetimeIndex(decade['Date']).month
decade['Day'] = pd.DatetimeIndex(decade['Date']).day
decade.head()


# In[18]:

grouped_max = decade.groupby(['Month','Day']).max()
grouped_min = decade.groupby(['Month','Day']).min()


# In[19]:

grouped_max = grouped_max.reset_index()
grouped_min = grouped_min.reset_index()


# In[20]:

# Drop Leap Day
grouped_max = grouped_max.drop(grouped_max[(grouped_max['Day'] == 29) & (grouped_max['Month'] == 2)].index)
grouped_min = grouped_min.drop(grouped_min[(grouped_min['Day'] == 29) & (grouped_min['Month'] == 2)].index)
grouped_min.shape
grouped_max = grouped_max.reset_index()
grouped_min = grouped_min.reset_index()


# In[21]:

year_2015['Date'] = pd.to_datetime(year_2015['Date'])
year_2015_max = year_2015.groupby('Date').max()
year_2015_min = year_2015.groupby('Date').min()
print(year_2015_max.shape)
print(year_2015_min.shape)


# In[22]:

year_2015_max = year_2015_max.reset_index() 
year_2015_min = year_2015_min.reset_index() 


# In[23]:

record_high = year_2015_max[year_2015_max['Data_Value'] > grouped_max['Data_Value']]
record_low = year_2015_min[year_2015_min['Data_Value'] < grouped_min['Data_Value']]


# In[24]:

# x ticks
xticks = (pd.date_range('1/1/2015','31/12/2015', freq = 'M') - 1 + pd.Timedelta('1D')).strftime('%-j').astype(int)
xticks


# In[25]:

xticks_labels = pd.to_datetime(xticks, format = '%j').strftime('%b')
xticks_labels


# In[26]:

# create a new image

get_ipython().magic('matplotlib notebook')

plt.figure()  
  
ax1 = plt.gca() # Primary axes
ax2 = ax1.twinx() # Seondary Axis

plt.scatter(record_high.index,record_high['Data_Value'], color = 'r', s = 15)
plt.scatter(record_low.index,record_low['Data_Value'], color = 'b', s = 15)

ax2.plot(grouped_min['Data_Value'], '-',color ='k', alpha = 0.1,  linewidth=1)
ax2.plot(grouped_max['Data_Value'],'-', color ='k', alpha = 0.3,  linewidth=1)
ax2.fill_between(grouped_min.index, 
                       grouped_min['Data_Value'], grouped_max['Data_Value'], 
                       facecolor='gray', 
                       alpha=0.25)
ax2.set_xlim(1,365)
ax2.set_xticks(xticks)
ax2.set_xticklabels(xticks_labels, alpha = 0.6)
ax1.set_xticklabels(xticks_labels, alpha = 0.6)
ax2.set_title('Low & High Temperature between 2005-2014 \n and Record Braking Temperatures of 2015', alpha =0.6)

# Set y tick Labels
axlim = ax1.set_ylim(-380,450)
yticks = pd.Series([-300,0,400])
ax1.set_yticks(yticks)
# yticks = (ax.get_yticks() / 10).astype(int)
ylabels = pd.Series(yticks/10).astype(int).astype(str) + ' °C'
ax1.set_yticklabels(ylabels, alpha = 0.6)

# Secondary y-axis labels
#Convert to fahrenheit from celcius
ax2.set_ylim(axlim)
ax2.set_yticks(yticks)
yticks_ax2 = (yticks/10 *  (9/5) + 32).astype(int)
ylabels_ax2 = pd.Series(yticks_ax2).astype(int).astype(str) + ' °F'
ax2.set_yticklabels(ylabels_ax2, alpha = 0.6)

# Shaded Gray background
# start = pd.Series(xticks).iloc[::2]
# end = pd.Series(xticks).iloc[1::2]
# for s, e in zip(start, end):
#     ax1.axvspan(s,e, alpha=0.02, color='k', linewidth = 0)

ax1.grid(True, alpha = 0.1)


# invisible Frame
for spine in ax2.spines:
    ax2.spines[spine].set_visible(False)
for spine in ax1.spines:
    ax1.spines[spine].set_visible(False)
    
ax1.spines['bottom'].set_visible(True)
ax1.spines['bottom'].set_alpha(0.3)

# Removing Ticks
ax1.tick_params(axis=u'both', which=u'both',length=0)
ax2.tick_params(axis=u'both', which=u'both',length=0)

# Labels
ax1.set_xlabel('Month', alpha = 0.8)
ax1.set_ylabel('Temperature' , alpha = 0.8)

# legend
leg = ax2.legend(loc=4,labels = ['Low (2005-2014)','High (2005-2014)','Record High','Record Low'], frameon = False, fontsize = 'x-small')
plt.show()


# In[ ]:



